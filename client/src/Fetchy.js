class Fetchy {
  static async Get (Link) {
    try {
      const Response = await window.fetch(Link)
      if (!Response.ok) {
        throw Response.status
      }
      const data = await Response.json()
      return data
    } catch (error) {
      console.log('OOPS! Error requesting the requests that were requested with the requests :(')
      return error
    }
  }
}

export { Fetchy }
