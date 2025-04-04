import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with caramel and cinnamon notes",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80",
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Buttery, flaky pastry baked fresh every morning",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
  },
  {
    id: 3,
    name: "Cold Brew",
    description: "Smooth, rich coffee steeped for 24 hours",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 4,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80",
  },
];

const FeaturedItems = () => {
  return (
    <section id="featured" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-4">
            Today's Specials
          </h2>
          <div className="w-24 h-1 bg-[#FFA726] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-[#6F4E37]">{item.name}</span>
                    <span className="text-[#FFA726] font-medium">{item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white">
                    Add to Order
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;