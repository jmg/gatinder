export default async function handler(req, res) {

    console.log(process.env.REVALIDATE_SECRET)
    if (req.headers.secret !== process.env.REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    try {
      await res.revalidate('/')
      return res.json({ revalidated: true })
    } catch (err) {
      return res.status(500).send('Error revalidating')
    }
}