import connectMongo from '../../utils/connectMongo';
import Urls from '../../models/urls';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';
var mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
export default async function handler(req, res) {
  if (req.method == 'GET') {
    await connectMongo();
    let filter = {};
    // console.log(req.query.id);
    let id = ObjectId(getCookie('key', { req, res }));
    if (req.query.id) {
      id = ObjectId(req.query.id);
      filter = { _id: id };
      const URL = await Urls.findById(id);

      return res.status(200).json(URL);
    } else {
      filter = { code: req.query.code };
      const URL = await Urls.findOne(filter);
      // console.log(URL);
      res.status(200).json(URL);
    }
  } else if (req.method == 'POST') {
    // if (!req.body.url) {
    //   return res.status(400).json('Please provide url.');
    // }
    // deleteCookie('key', { req, res });
    const reqBody = JSON.parse(req.body);
    const url = reqBody.url;

    if (reqBody.code) {
      const id = ObjectId();
      const newUrl = await Urls.create({
        _id: id,
        url: url,
        code: reqBody.code,
      });

      setCookie('key', newUrl._id, { req, res });
      return res.status(201).json(newUrl);
    } else {
      const id = ObjectId();
      const newUrl = await Urls.create({
        _id: id,
        url: url,
      });
      setCookie('key', newUrl._id, { req, res });
      // setCookie('key', newUrl._id);

      return res.status(201).json(newUrl);
    }
  } else {
    return res.status(404);
  }
}
