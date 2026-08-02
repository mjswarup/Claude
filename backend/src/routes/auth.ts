import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => {
  res.status(201).json({ message: 'Signup endpoint placeholder' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login endpoint placeholder' });
});

router.get('/me', (req, res) => {
  res.status(200).json({ message: 'Authenticated user placeholder' });
});

export default router;
