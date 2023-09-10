import { LoginService, registerService } from "../services/auth";

// Mã lỗi sẽ chia ra như sau: số dương là client, số âm là server

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    console.log(req?.body);
    if (!name || !phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    }
    const response = await registerService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: -1, mes: "Fail at auth controller " + error });
  }
};

export const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    console.log(req?.body);
    if (!phone || !password) {
      return res.status(400).json({
        err: 1,
        msg: "Missing inputs !",
      });
    }
    const response = await LoginService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ err: -1, mes: "Fail at auth controller " + error });
  }
};
