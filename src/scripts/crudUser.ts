import { connectedDB, disconnectDB } from "../config/db";
import { User } from "../model/User.model";

async function main(): Promise<void> {
  await connectedDB();

  const created = await User.create({
    name: "Temp User",
    email: "temp@taskflow.dev",
    password: "password123",
  });

  console.log("created ->", created._id.toString(), created.role);

  console.log("count ->", await User.countDocuments());

  console.log("findById ->", (await User.findById(created._id))?.name);

  console.log("findOne ->", (await User.findOne({ role: "admin" }))?.name);

  const a = await User.findByIdAndUpdate(created._id, { name: "Renamed" });

  console.log("no new:true ->", a?.name);

  const b = await User.findByIdAndUpdate(
    created._id,
    { name: "Renamed Again" },
    { new: true },
  );

  console.log("with new:true ->", b?.name);

  await User.findByIdAndDelete(created._id);

  console.log("count ->", await User.countDocuments());

  await disconnectDB();
}

main().catch(console.error);
