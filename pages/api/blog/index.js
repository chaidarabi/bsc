import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";
import { getRandomImage } from "../../../utils";

export default function handler(req, res) {
  const postsfolder = join(process.cwd(), `/_posts/${uuidv4()}.md`);
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      const data = matter.stringify("# New Blog", {
        date: new Date().toISOString(),
        title: "Sepatu - Lebih dari Hanya Penutup Kaki",
        tagline: "Jadi, sepatu memang lebih dari sekadar penutup kaki. Dari sejarahnya yang panjang hingga posis",
        preview:
          "Sepatu telah menjadi bagian penting dari kehidupan manusia sejak ribuan tahun yang lalu. Meskipun awalnya diciptakan hanya sebagai penutup kaki, sepatu kini menjadi lebih dari itu - menjadi simbol mode, status, dan kepribadian. Dari sepatu olahraga hingga sepatu formal, dari sepatu kasual hingga sepatu hak tinggi, ada begitu banyak jenis dan model sepatu yang berbeda untuk memenuhi kebutuhan dan selera individu. Sejarah Sepatu Sejarah sepatu dapat ditelusuri hingga sekitar 8.000 SM ketika manusia pertama kali membuat alas kaki dengan bahan daun dan kulit binatang. Dalam beberapa milenia berikutnya, sepatu berkembang menjadi berbagai bentuk dan desain yang berbeda-beda tergantung pada kebutuhan dan budaya di setiap wilayah. Misalnya, di Mesir kuno, sepatu sandal terbuat dari kulit dengan tali yang digunakan untuk mengikatkan ke kaki. Sementara di Eropa pada Abad Pertengahan, sepatu dengan ujung yang panjang dan melengkung sangat populer. Kemajuan teknologi dan desain membuat sepatu semakin nyaman dan fungsional. Di era modern, sepatu dibuat dari berbagai bahan seperti kanvas, karet, plastik, dan kulit sintetis. Ada juga bahan-bahan khusus seperti Gore-Tex yang digunakan untuk sepatu outdoor agar tetap kering dan nyaman di segala cuaca. Sepatu dan Mode Sepatu tidak hanya berfungsi untuk melindungi kaki, tetapi juga menjadi bagian penting dalam industri mode. Model, merek, dan warna sepatu dapat menjadi cara seseorang mengekspresikan diri dan menunjukkan status sosialnya. Misalnya, sepatu olahraga dari merek terkenal seperti Nike dan Adidas menjadi simbol status di kalangan remaja dan anak muda, sementara sepatu hak tinggi sering dikaitkan dengan profesionalisme dan elegansi dalam pakaian formal. Selain itu, sepatu juga dipakai dalam berbagai acara, seperti pesta, konser, atau pernikahan. Ada banyak model sepatu formal dan semi-formal seperti sepatu oxford, loafer, atau sepatu kets yang cocok untuk berbagai kesempatan.",
        image: getRandomImage(),
      });
      fs.writeFileSync(postsfolder, data, (err) => console.error(err));
      res.status(200).json({ status: "CREATED" });
    }
    if (req.method === "DELETE") {
      const deleteFile = join(process.cwd(), `/_posts/${req.body.slug}.md`);
      fs.unlinkSync(deleteFile);
      res.status(200).json({ status: "DONE" });
    }
  } else {
    res.status(200).json({ name: "This route works in development mode only" });
  }
}
