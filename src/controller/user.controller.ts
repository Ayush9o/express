import { Request, Response, NextFunction } from "express";
import  { ApiResponse } from "../type/api.type";
import { UserDocument } from "../model/User.model";
import * as userService from "../service/user.service";

export async function getUsers(
  req: Request,
  res: Response<ApiResponse<UserDocument[]>>,
  next: NextFunction,
): Promise<void> {
  try {
    const users = await userService.listUser();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUser(
  req: Request,
  res: Response<ApiResponse<UserDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await userService.getUserId(req.params.id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
        error: { user: ["user not found"] },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

export async function postUser(
  req: Request,
  res: Response<ApiResponse<UserDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await userService.createUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      avatarUrl: req.body.avatarUrl,
      isVerified: req.body.isVerified,
      
    });

    res.status(201).json({
      success: true,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function putUser(
  req: Request,
  res: Response<ApiResponse<UserDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await userService.updateUser(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      avatarUrl: req.body.avatarUrl,
      isVerified: req.body.isVerified,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "404",
        error: { user: ["user not found"] },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response<ApiResponse<UserDocument>>,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await userService.deleteUser(req.params.id);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
        error: { user: ["user not found"] },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
}
