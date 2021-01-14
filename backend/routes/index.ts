import { Router } from 'express';

const router = Router();

router.get('/1', (data) =>
  console.log(`its all what i have its: GETS to "-hz-/1" and data: ${data}`)
);

router.post(`/post/:num`, (data) =>
  console.log(`its all what i have its: POST to "-hz-/post/:num" and data: ${data}`)
);

export default router;
