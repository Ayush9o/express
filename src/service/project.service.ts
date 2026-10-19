import { Project, ProjectDocument } from "../model/Project.model";

export interface CreateProjectData {
  name: string;
  description?: string;
  owner: string;
  members: string[];
}

export type UpdateProjectData = Partial<Omit<CreateProjectData, "owner">>;

export async function listProject(): Promise<ProjectDocument[]> {
  return Project.find();
}
export async function getProjectById(
  id: string,
): Promise<ProjectDocument | null> {
  return Project.findById(id);
}
export async function createProject(
  data: CreateProjectData,
): Promise<ProjectDocument> {
  return Project.create(data);
}
export async function updateProject(
  id: string,
  data: UpdateProjectData,
): Promise<ProjectDocument | null> {
  return Project.findByIdAndUpdate(id, data);
}
export async function deleteProject(
  id: string,
): Promise<ProjectDocument | null> {
  return Project.findByIdAndDelete(id);
}
