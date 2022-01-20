const isInvalid = (name) => !name || name === ''; 

const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (isInvalid(firstName) || isInvalid(lastName)) {
    return res.status(400).json({
      error: true,
      message: 'Campos relacionados a nomes são obrigatórios',
    });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    });
  }

  next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email) || email === '') {
    return res.status(400).json({
      error: true,
      message: 'O campo "email" inválido',
    });
  }

  next();
}

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
};

