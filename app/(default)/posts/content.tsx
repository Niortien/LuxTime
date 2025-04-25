"use client"
import { PostCard } from '@/components/posts/PostCard'
import { Post } from '@/types/posts'


export default function Content({posts}:{posts:Post[]}) {
    // const[posts,setPosts]=useState<Post[]>([])
    // useEffect(()=>{
    //     async function getPosts(){
    //         const response = await fetch("https://api.vercel.app/blog")
    //         const data:Post[] = await response.json() 
    //         setPosts(data)
    //     }
    //     getPosts()
    // },[])
  return (
    
        <div className="min-h-screen bg-gray-100">
              <div className="max-w-5xl mx-auto py-12 px-4">
                <header className="text-center mb-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h1>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our collection of thoughtfully curated articles covering technology,
                    architecture, lifestyle, and more.
                  </p>
                </header>
        
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>
  
  )
}
