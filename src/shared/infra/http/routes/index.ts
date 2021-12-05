import likeRoutes from '@modules/like/infra/http/routes/like.routes';
import postRoutes from '@modules/post/infra/routes/post.routes';
import userRoutes from '@modules/user/infra/http/routes/user.routes';
import express from 'express';

const appRoutes = express.Router();

appRoutes.use('/user', userRoutes);
appRoutes.use('/like', likeRoutes);
appRoutes.use('/posts', postRoutes);

export default appRoutes;
