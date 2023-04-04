import { product } from "@/db/productDB";

export default function handler(req, res) {
  res.status(200).json({
    data: product,
  });
}
