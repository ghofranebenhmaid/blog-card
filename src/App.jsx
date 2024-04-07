import ArrowRightIcon from "./components/icons/ArrowRightIcon";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  const posts = [
    {
      id: 1,
      title: "Sample Blog Post",
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus iusto perspiciatis quibusdam voluptates ad rerum dignissimos hic, odio quis delectus, ducimus eos aperiam sapiente, odit neque possimus quisquam perferendis! ",
      imageUrl: "/src/assets/wheretostaycopenhagen.jpg",
      readMoreUrl: "/post/sample-blog-post",
    },
  ];
  return (
    <main className="  bg-slate-200 w-full min-h-[100vh] grid place-content-center ">
      <div className="gap-6 px-4 ">
        {posts.map((post) => (
          <Card
            className="max-w-sm overflow-hidden transition shadow-md rounded-3xl hover:shadow-lg"
            key={post.id}
          >
            <img src={post.imageUrl} alt="wheretostay copenhagen" />

            <CardHeader>
              <CardTitle className="text-3xl ">{post.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              {" "}
              <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button className="transition group hover:-translate-y-1">
                Read More <ArrowRightIcon />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
