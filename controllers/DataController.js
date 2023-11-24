import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getData = async (req, res) => {
  try {
    const response = await prisma.data.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDataById = async (req, res) => {
  try {
    const response = await prisma.data.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createData = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await prisma.data.create({
      data: {
        name: name,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateData = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await prisma.data.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: name,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteData = async (req, res) => {
  try {
    const response = await prisma.data.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
