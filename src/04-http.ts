/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from 'axios'

interface Post {
  id: number
  title: string
  body: string
  views: number
}

interface GetPostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

const getAllPosts = async () => {
  const response = await axios.get<GetPostsResponse>('https://dummyjson.com/posts')
  return response.data
}

const getPostById = async (postId: number) => {
  const response = await axios.get<Post>(`https://dummyjson.com/posts/${postId}`)
  return response.data
}

const createPost = async (newPost: Post) => {
  const response = await axios.post<Post>('https://dummyjson.com/posts/add', newPost)
  return response.data
}
createPost({}).then((p) => p.views)
getPostById(123).then((p) => p.views)
getAllPosts().then((p) => p.total)
