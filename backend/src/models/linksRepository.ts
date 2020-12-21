import linkModel, { ILinkModel } from './linkModel';
import { Link } from './link';

// find link by code
function findByCode(code: string) {
  return linkModel.findOne<ILinkModel>({ where: { code }});
}

// add new link
function add(link: Link) {
  return linkModel.create<ILinkModel>(link);
}

// update existing link hits
async function hit(code: string) {
  const link = await findByCode(code);
  if (!link) return null;

  link.hits!++;
  await link.save();
  return link;
}

export default {
  findByCode,
  add,
  hit
}