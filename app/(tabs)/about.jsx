import { Link } from "expo-router";
import { Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

const About = () => {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident accusamus, atque animi suscipit, at ipsum qui maiores aut
          eius vitae autem. Maxime architecto inventore, sed porro explicabo
          voluptatibus deleniti?
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident accusamus, atque animi suscipit, at ipsum qui maiores aut
          eius vitae autem. Maxime architecto inventore, sed porro explicabo
          voluptatibus deleniti?
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident accusamus, atque animi suscipit, at ipsum qui maiores aut
          eius vitae autem. Maxime architecto inventore, sed porro explicabo
          voluptatibus deleniti?
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident accusamus, atque animi suscipit, at ipsum qui maiores aut
          eius vitae autem. Maxime architecto inventore, sed porro explicabo
          voluptatibus deleniti?
        </Text>
        <Text className="text-white/90 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          provident accusamus, atque animi suscipit, at ipsum qui maiores aut
          eius vitae autem. Maxime architecto inventore, sed porro explicabo
          voluptatibus deleniti?
        </Text>
      </ScrollView>
    </Screen>
  );
};

export default About;
