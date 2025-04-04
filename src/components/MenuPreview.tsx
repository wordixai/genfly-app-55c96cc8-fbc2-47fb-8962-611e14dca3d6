import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    id: "coffee",
    name: "Coffee",
    items: [
      {
        id: 1,
        name: "Signature Latte",
        description: "Our house specialty with caramel and cinnamon notes",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1037&q=80",
        popular: true,
      },
      {
        id: 2,
        name: "Espresso",
        description: "Strong, concentrated coffee served in a small cup",
        price: "$3.00",
        image: "https://images.unsplash.com/photo-1596952954288-16862d37405b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        popular: false,
      },
      {
        id: 3,
        name: "Cold Brew",
        description: "Smooth, rich coffee steeped for 24 hours",
        price: "$4.25",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        popular: true,
      },
      {
        id: 4,
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and milk foam",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        popular: false,
      },
    ],
  },
  {
    id: "pastries",
    name: "Pastries",
    items: [
      {
        id: 5,
        name: "Artisan Croissant",
        description: "Buttery, flaky pastry baked fresh every morning",
        price: "$3.75",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
        popular: true,
      },
      {
        id: 6,
        name: "Blueberry Muffin",
        description: "Moist muffin packed with fresh blueberries",
        price: "$3.50",
        image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1010&q=80",
        popular: true,
      },
      {
        id: 7,
        name: "Chocolate Chip Cookie",
        description: "Soft-baked cookie with premium chocolate chunks",
        price: "$2.75",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        popular: false,
      },
      {
        id: 8,
        name: "Cinnamon Roll",
        description: "Swirled with cinnamon sugar and topped with cream cheese frosting",
        price: "$4.25",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        popular: false,
      },
    ],
  },
  {
    id: "light-meals",
    name: "Light Meals",
    items: [
      {
        id: 9,
        name: "Avocado Toast",
        description: "Sourdough bread topped with avocado, cherry tomatoes, and microgreens",
        price: "$8.50",
        image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        popular: true,
      },
      {
        id: 10,
        name: "Caprese Sandwich",
        description: "Fresh mozzarella, tomato, and basil on ciabatta with balsamic glaze",
        price: "$9.25",
        image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80",
        popular: false,
      },
      {
        id: 11,
        name: "Quinoa Bowl",
        description: "Protein-packed bowl with seasonal vegetables and tahini dressing",
        price: "$10.50",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        popular: true,
      },
      {
        id: 12,
        name: "Soup of the Day",
        description: "Freshly made soup served with artisan bread",
        price: "$6.75",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        popular: false,
      },
    ],
  },
];

const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  return (
    <section id="menu" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6F4E37] mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#FFA726] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of handcrafted beverages and
            freshly made food items, prepared with the finest ingredients.
          </p>
        </motion.div>

        <Tabs
          defaultValue="coffee"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/80 backdrop-blur-sm p-1 rounded-full">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-[#6F4E37] data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.popular && (
                        <div className="absolute top-2 right-2 bg-[#FFA726] text-white text-xs font-bold px-2 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-[#6F4E37]">{item.name}</h3>
                        <span className="text-[#FFA726] font-medium">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;