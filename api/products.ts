export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar produtos",
    });
  }
}
