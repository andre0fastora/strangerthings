const BASE = 'https://strangers-things.herokuapp.com/api/2301-ftb-et-web-ft'

export const fetchPosts = async () => {
    const response = await fetch(`${BASE}/posts`)
    const result = await response.json()
    return result.data.posts
}