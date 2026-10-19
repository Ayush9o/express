import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../type/api.type";
import { ProjectDocument } from "../model/Project.model";
import * as projectService from "../service/project.service";

export async function getProjects(
  req: Request,
  res: Response<ApiResponse<ProjectDocument[]>>,
  next: NextFunction,
): Promise<void> {
  try {
    const projects = await projectService.listProject();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
}

export async function getProject(
  req: Request,
  res: Response<ApiResponse<ProjectDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const project = await projectService.getProjectById(req.params.id);

    if (!project) {
      res.status(404).json({
        success: false,
        error: { project: ["project not found"] },
        message: "Complete....",
      });
      return;
    }

    res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
}

export async function postProject(
  req: Request,
  res: Response<ApiResponse<ProjectDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const project = await projectService.createProject({
      name: req.body.name,
      description: req.body.description,
      owner: req.body.owner,
      members: req.body.members,
    });

    res.status(201).json({
      success: true,
      data: project,
      message: "Project created",
    });
  } catch (error) {
    next(error);
  }
}

export async function putProject(
  req: Request,
  res: Response<ApiResponse<ProjectDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const project = await projectService.updateProject(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      members: req.body.members,
    });

    if (!project) {
      res.status(404).json({
        success: false,
        error: { project: ["project not found"] },
        message: "404",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: project,
      message: "Project updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteProject(
  req: Request,
  res: Response<ApiResponse<ProjectDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const project = await projectService.deleteProject(req.params.id);

    if (!project) {
      res.status(404).json({
        success: false,
        message: "404",
        error: { project: ["project not found"] },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: project,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
