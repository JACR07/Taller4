import { useEffect, useState } from 'react'
import {
  Alert,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const API_URL = '/api/info'

function App() {
  const [apiData, setApiData] = useState({
    message: 'Cargando...',
    integrantes: [],
  })

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setApiData({
          message: data.message || 'La API está funcionando',
          integrantes: data.integrantes || [],
        })
      })
      .catch(() => {
        setApiData({
          message: 'No se pudo conectar con la API',
          integrantes: [],
        })
      })
  }, [])

  return (
    <Container className="taller-container">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="main-title">tallerIV</h1>

          <div className="status-section">
            <h4 className="status-title">Estado de la API</h4>
            <p className="status-message">{apiData.message}</p>
          </div>

          <Alert color="success" className="api-alert">
            La API está funcionando correctamente y se está consumiendo desde el Frontend.
          </Alert>

          <Card className="info-card">
            <CardBody>
              <CardTitle tag="h4">Integrantes</CardTitle>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Materias aprobadas</th>
                  </tr>
                </thead>
                <tbody>
                  {apiData.integrantes.length > 0 ? (
                    apiData.integrantes.map((integrante) => (
                      <tr key={integrante.nombre}>
                        <td>{integrante.nombre}</td>
                        <td>{integrante.edad}</td>
                        <td>{integrante.carrera}</td>
                        <td>{integrante.materiasAprobadas}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        No hay datos disponibles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default App
