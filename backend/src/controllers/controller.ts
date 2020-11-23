import { Request, Response } from "express";
import { Link } from '../models/link';

const links: Link[] = [];
let proxId = 1;

// create new url shorter
function generateCode() {
  let text = '';
  const possible = '';
}

// creating link
function postLink(req: Request, res: Response) {
  const link = req.body as Link;
  link.id = proxId++;
  link.code =
  res.send('postLink');
}

// returns links informations
function getLink(req: Request, res: Response) {
  res.send('getLink');
}

// returns the link and counts access
function hitLink(req: Request, res: Response) {
  res.send('hitLink');
}

export default {
  postLink,
  getLink,
  hitLink
}