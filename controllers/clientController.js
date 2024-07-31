const db = require('../db');

// Listar todos os clientes
exports.getAllClients = async (req, res) => {
  const [clients] = await db.query('SELECT * FROM clients');
  res.render('index', { clients });
};

// Mostrar formulário de adicionar cliente
exports.addClientForm = (req, res) => {
  res.render('add');
};

// Adicionar novo cliente
exports.addClient = async (req, res) => {
  const { name, email, phone, address } = req.body;
  await db.query('INSERT INTO clients (name, email, phone, address) VALUES (?, ?, ?, ?)', [name, email, phone, address]);
  res.redirect('/');
};

// Mostrar formulário de editar cliente
exports.editClientForm = async (req, res) => {
  const [clients] = await db.query('SELECT * FROM clients WHERE id = ?', [req.params.id]);
  res.render('edit', { client: clients[0] });
};

// Atualizar cliente
exports.updateClient = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;
  await db.query('UPDATE clients SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?', [name, email, phone, address, id]);
  res.redirect('/');
};

// Deletar cliente
exports.deleteClient = async (req, res) => {
  await db.query('DELETE FROM clients WHERE id = ?', [req.params.id]);
  res.redirect('/');
};
