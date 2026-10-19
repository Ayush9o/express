import { connectedDB, disconnectDB } from "../config/db";
import { Project } from "../model/Project.model";
import { User } from "../model/User.model";

async function main(): Promise<void> {
  await connectedDB();

  const user = await User.findOne();

  if (!user) {
    throw new Error("Please create a user first");
  }

  const created = await Project.create({
    name: "TaskFlow Project",
    description: "This is my first project",
    owner: user._id,
    member: [user._id],
  });

  console.log("created ->", created._id.toString(), created.name);

  console.log("count ->", await Project.countDocuments());

  console.log("findById ->", (await Project.findById(created._id))?.name);

  console.log(
    "findOne ->",
    (await Project.findOne({ name: "TaskFlow Project" }))?.name,
  );

  const a = await Project.findByIdAndUpdate(created._id, {
    name: "Renamed Project",
  });

  console.log("no new:true ->", a?.name);

  const b = await Project.findByIdAndUpdate(
    created._id,
    { name: "Renamed Again" },
    { new: true },
  );

  console.log("with new:true ->", b?.name);

  await Project.findByIdAndDelete(created._id);

  console.log("count ->", await Project.countDocuments());

  await disconnectDB();
}

main().catch(console.error);
