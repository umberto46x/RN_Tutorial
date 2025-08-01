import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Button,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";

const image = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleModalLoading = () => {
    setIsModalActive(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Wrapper to limit the content */}
      <SafeAreaView style={styles.container}>
        {/* Status bar that shows the System info */}
        <StatusBar style="light" />
        {/* The scrollview makes the content inside scrollable if the content is overflowing */}
        <ScrollView style={styles.sw}>
          {/* Title */}
          <Text style={styles.header}>Welcome To React Native Tutorial</Text>
          {/* Pressable Image with various press statuses */}
          <Pressable
            style={{
              width: "50%",
              margin: "auto",
            }}
            onPress={() => {
              console.log("Image Pressed");
            }}
            onPressIn={() => {
              console.log("Image Pressed In");
            }}
            onPressOut={() => {
              console.log("Image Pressed Out");
            }}
            onLongPress={() => {
              console.log("Image Long Pressed");
            }}
          >
            <Image
              style={styles.img}
              source={{ uri: "https://picsum.photos/128" }}
            ></Image>
          </Pressable>
          {/* Button that activates an Alert component */}
          <Button
            title="Press to open the alert"
            color={"orange"}
            onPress={() => {
              /* The alert can have a title,description,and a custom array of buttons with an onpress event */
              Alert.alert(
                "Alert Title",
                "Alert Description",
                [
                  {
                    text: "Open The Modal",
                    onPress: () => {
                      console.log("opened the modal from the alert");
                      handleModalLoading();
                    },
                  },
                  {
                    text: "Log ",
                    onPress: () => {
                      console.log("logged from the alert");
                    },
                  },
                ],
                {
                  onDismiss() {
                    console.log("alert dismissed by using gesture");
                  },
                }
              );
            }}
          ></Button>
          {/* Modal actived by the button under this, and closed by inside the model button */}
          <Modal
            visible={isModalActive}
            animationType="fade"
            presentationStyle="fullScreen"
            onRequestClose={() => {
              setIsModalActive(false);
            }}
          >
            <View style={styles.modelView}>
              <ActivityIndicator
                color={"orange"}
                size={"large"}
                animating={isLoading}
              ></ActivityIndicator>

              {!isLoading && (
                <>
                  <Button
                    title="X"
                    color={"black"}
                    onPress={() => {
                      setIsModalActive(false);
                    }}
                  ></Button>
                  <Text style={{ borderColor: "black" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    minima recusandae iure magnam omnis distinctio quod
                    deleniti? Vel quod aperiam nulla! Minima molestias vitae ex
                    facere, accusantium repellendus aliquam unde?
                  </Text>
                </>
              )}
            </View>
          </Modal>
          {/* Button that opens the model */}
          <Button
            title="Press to open the modal"
            color={"orange"}
            onPress={() => {
              handleModalLoading();
            }}
          ></Button>
          {/* ImageBackground that wraps a wall of text */}
          <ImageBackground
            style={styles.imgBg}
            source={{ uri: "https://picsum.photos/4096" }}
          >
            <Text style={styles.header}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sit maxime dolore odit cumque non ea est ex tempora,
              natus iusto exercitationem in nobis tempore beatae officiis sunt
              quidem rem! Voluptate facere itaque, aspernatur consequatur
              suscipit quibusdam nulla voluptatem sequi nobis cumque blanditiis
              reprehenderit fugiat iusto nostrum ducimus et quis porro eum
              ratione? Molestias sequi eligendi itaque officiis temporibus fuga!
              Reprehenderit iure soluta nam labore beatae doloremque rerum culpa
              delectus, eaque ut eius officiis! Alias, ullam excepturi porro,
              aliquid eum, veniam nihil rerum minima tempora esse autem sed
              maiores vel? Eius sint, minima sequi amet excepturi tenetur
              suscipit sunt ex, aut recusandae cupiditate quisquam maxime autem
              possimus quidem tempore numquam repellendus eaque. Voluptas
              temporibus harum eaque a. Quasi, animi vitae? Dolores impedit
              sequi vel beatae! In, ipsam. Libero, id. Sunt nam laudantium
              blanditiis inventore quasi fugit. Sit numquam ab nisi quo illum
              cum, ea laborum, dolores, harum hic nam quaerat! Eveniet a ipsum
              pariatur consequuntur aut, sit omnis rerum cum placeat alias id
              corporis nam error nesciunt nemo at odio maxime dolorum! Sequi
              ullam harum provident quas! Nulla, nam ut! Rem enim porro sequi
              libero illum alias excepturi tenetur, voluptate iure ipsum.
              Distinctio, sunt omnis, itaque vero officiis tempora amet vitae
              dignissimos qui deleniti modi est iure consequatur maiores. Enim.
              Error magnam aliquam repudiandae labore nisi voluptatum facilis
              aliquid consequuntur amet. Optio eveniet neque ipsum soluta saepe
              assumenda, impedit, exercitationem, odio porro fugit aperiam? Vero
              at distinctio ullam reprehenderit cum? Ducimus soluta dolores
              aliquam corporis veritatis, aliquid tenetur dolorum ratione odio
              repudiandae eius accusamus nulla amet, modi nihil unde culpa minus
              nisi. Quos praesentium modi cupiditate esse sunt non culpa.
              Voluptates, laudantium nisi commodi nesciunt sunt distinctio rem
              optio suscipit voluptatum temporibus dolorum libero vero sapiente
              repellendus corrupti deserunt tempore eligendi ex! Natus vero,
              magni molestiae aspernatur non praesentium accusantium.
            </Text>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sw: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "dashed",
  },
  modelView: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "white",
    textAlign: "center",
    paddingTop: 8,
    paddingBottom: 8,
    opacity: 0.5,
  },
  img: {
    width: 128,
    height: 128,
    borderRadius: 16,
    borderColor: "white",
    borderWidth: 4,
    resizeMode: "cover",
    margin: "auto",
    marginBottom: 16,
    opacity: 0.7,
  },
  imgBg: {
    height: "auto",
    resizeMode: "center",
  },
});
