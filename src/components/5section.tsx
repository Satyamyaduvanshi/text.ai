

const peoples = [
    {
      name: "Cole",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb567_memoji-6.webp",
      bio: "A Great Hubby",
      text: "TextAI helped me plan the perfect surprise date night. It understood my partner's preferences and gave me amazing, personalized recommendations. No more endless Googling!",
    },
    {
      name: "Nora",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb56b_memoji-3.webp",
      bio: "That One Friend Who Actually Cares",
      text: "TextAI is helping hold my friend group together. We use it to plan trips, get restaurant recommendations, and even settle friendly debates. It's become an indispensable part of our social circle.",
    },
    {
      name: "Sofie",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb569_memoji-5.webp",
      bio: "The Smarty Pants",
      text: "Our study group feels like a supercharged learning machine since we added TextAI. It explains complex topics and helps us all understand better. No more screenshot-sharing marathons.",
    },
    {
      name: "Olivia",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb56a_memoji-7.webp",
      bio: "The Picky Friend",
      text: "TextAI saved our long-distance movie nights! It suggests films available on everyone's streaming services and helps us sync our start times across different time zones. Now our monthly movie nights actually happen!",
    },
    {
      name: "Emma",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb568_memoji-1.webp",
      bio: "The Supermom",
      text: "TextAI is a game-changer for my family. We use it to settle debates, get homework help, and plan our vacations. It keeps us connected and informed without the hassle.",
    },
    {
      name: "Oliver",
      img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb566_memoji-2.webp",
      bio: "The Planner",
      text: "TextAI saved our Friday night! We had 8 people with different diets, and it found us this amazing Thai fusion place that everyone loved. Even suggested the best dishes for our vegetarian friend. Now we always use it!",
    },
  ];
  

export default function FifthSection(){


    return(
        <section className="">
            <div className="w-full min-h-screen z-100">
            <div className="py-16 bg-gray-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What People Are Saying</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {peoples.map((person, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-center mb-4">
                            <img 
                              src={person.img} 
                              alt={person.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{person.name}</h3>
                              <p className="text-sm text-gray-500">{person.bio}</p>
                            </div>
                          </div>
                          <p className="text-gray-600 italic">"{person.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


            </div>
        </section>
    )
}