import RekubreWhatsApp from './RekubreWhatsApp'

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      gap: 16,
    }}>
      <div style={{
        textAlign: 'center',
        color: '#fff',
        marginBottom: 4,
      }}>
        <h1 style={{
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: 4,
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Rekubre — Chatbot WhatsApp
        </h1>
        <p style={{ fontSize: 13, color: '#888', maxWidth: 360 }}>
          Prototipo de asistente automatizado para atención al cliente
        </p>
      </div>
      <RekubreWhatsApp />
      <p style={{ fontSize: 11, color: '#555', marginTop: 4 }}>
        Demo interactivo · No conectado a WhatsApp real
      </p>
    </div>
  )
}
