import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const AUTHOR_PID = '265/2813' // Dr. Jothi Prakash V. on DBLP
const OUTPUT_FILE = path.join(__dirname, '../data/publications.json')

async function fetchPublications() {
  console.log(`📡 Fetching live publications from DBLP (Author PID: ${AUTHOR_PID})...`)
  
  const url = `https://dblp.org/pid/${AUTHOR_PID}.json`
  
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    const hits = data.result?.hits?.hit
    
    if (!hits || !Array.isArray(hits)) {
      throw new Error('No publications found or invalid data format received from DBLP')
    }

    console.log(`✅ Successfully fetched ${hits.length} publications.`)

    // Transform and filter data to match schema
    const formatted = hits.map(hit => {
      const info = hit.info
      return {
        title: info.title,
        venue: info.venue,
        year: parseInt(info.year),
        doi: info.doi || null,
        type: info.type === 'Journal Articles' ? 'Journal' : 'Conference'
      }
    })

    // Group by year (descending)
    const groupedByYear = {}
    formatted.forEach(pub => {
      if (!groupedByYear[pub.year]) {
        groupedByYear[pub.year] = []
      }
      groupedByYear[pub.year].push(pub)
    })

    const finalData = Object.keys(groupedByYear)
      .sort((a, b) => b - a) // Year descending
      .map(year => ({
        year: parseInt(year),
        publications: groupedByYear[year]
      }))

    // Save to file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalData, null, 2))
    console.log(`🚀 Updated ${OUTPUT_FILE} with latest publications from DBLP!`)

  } catch (error) {
    console.error('❌ Error syncing publications:', error.message)
    process.exit(1)
  }
}

fetchPublications()
