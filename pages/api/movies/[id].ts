import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database';
import enablePublicAccess from '@cors';

const MovieDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res);

    const db = new DB();
    const movieId = req.query.id as string;

    const movie = await db.getById(movieId);

    res.status(200).json(movie);
  } catch (e) {
    console.error(e);
    res.status(404).end();
  }
};

export default MovieDetail;
