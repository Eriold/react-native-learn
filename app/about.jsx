import { Link } from "expo-router";
import { Text, ScrollView, Pressable } from "react-native";

const About = () => {
  return (
    <ScrollView>
      <Link asChild href="/">
        <Pressable>
          <Text className="text-blue-400 text-xl mt-24">Ir al home</Text>
        </Pressable>
      </Link>
      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        provident accusamus, atque animi suscipit, at ipsum qui maiores aut eius
        vitae autem. Maxime architecto inventore, sed porro explicabo
        voluptatibus deleniti?
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        provident accusamus, atque animi suscipit, at ipsum qui maiores aut eius
        vitae autem. Maxime architecto inventore, sed porro explicabo
        voluptatibus deleniti?
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        provident accusamus, atque animi suscipit, at ipsum qui maiores aut eius
        vitae autem. Maxime architecto inventore, sed porro explicabo
        voluptatibus deleniti?
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        provident accusamus, atque animi suscipit, at ipsum qui maiores aut eius
        vitae autem. Maxime architecto inventore, sed porro explicabo
        voluptatibus deleniti?
      </Text>
      <Text className="text-white/90 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        provident accusamus, atque animi suscipit, at ipsum qui maiores aut eius
        vitae autem. Maxime architecto inventore, sed porro explicabo
        voluptatibus deleniti?
      </Text>
    </ScrollView>
  );
};

export default About;
