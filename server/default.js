import News from "./modal/news.js";
import { data } from "./constants/data.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);
    console.log("Data inserted Successsfully");
  } catch (err) {
    console.log("error : ", err.message);
  }
};

export default DefaultData;
