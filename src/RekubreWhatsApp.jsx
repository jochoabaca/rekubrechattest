import { useState, useRef, useEffect } from "react";

const REKUBRE_PRODUCTS = {
  calentadores: {
    name: "Calentadores",
    emoji: "🔥",
    desc: "Calentadores solares de agua para uso residencial y comercial. Ahorro energético, fácil instalación y mantenimiento. Ideales para duchas, cocinas y más. Disponibles en diferentes capacidades según la cantidad de personas en el hogar.",
    keywords: ["calentador", "solar", "agua caliente", "calentadores"],
  },
  tejas: {
    name: "Tejas",
    emoji: "🏠",
    desc: "Tejas de barro 100% natural, cocidas a alta temperatura para máxima durabilidad. Disponibles en varios estilos: Árabe, Portuguesa, Marsellesa y más. Ideales para techos residenciales, comerciales y proyectos arquitectónicos con acabado rústico o moderno.",
    keywords: ["teja", "tejas", "techo", "barro"],
  },
  ladrillo_planchado: {
    name: "Ladrillo Planchado",
    emoji: "🧱",
    desc: "Ladrillo planchado decorativo de barro natural, perfecto para muros, fachadas y acabados interiores. Superficie lisa y uniforme con apariencia elegante. Resistente a la intemperie y de fácil instalación.",
    keywords: ["ladrillo", "planchado", "muro", "fachada"],
  },
  baldosa: {
    name: "Baldosa de Barro",
    emoji: "🟫",
    desc: "Baldosa de barro natural para pisos y revestimientos. Acabado rústico tradicional, resistente al desgaste y de fácil mantenimiento. Ideal para terrazas, corredores, patios y áreas exteriores.",
    keywords: ["baldosa", "piso", "barro", "terraza"],
  },
  fachaleta: {
    name: "Fachaleta",
    emoji: "🏗️",
    desc: "Fachaleta decorativa de barro para revestimiento de paredes y fachadas. Delgada y liviana, fácil de instalar sobre cualquier superficie. Da un aspecto elegante tipo ladrillo visto sin necesidad de construcción pesada.",
    keywords: ["fachaleta", "fachada", "decorativa", "revestimiento"],
  },
  topes_estacionamiento: {
    name: "Topes de Estacionamiento",
    emoji: "🅿️",
    desc: "Topes de estacionamiento de hule reciclado de alta resistencia. Ideales para delimitar espacios en estacionamientos, centros comerciales y zonas residenciales. Con franjas reflectivas para visibilidad nocturna. Fácil instalación con tornillos o pegamento industrial.",
    keywords: ["tope", "estacionamiento", "parking", "parqueo"],
  },
  reductores_velocidad: {
    name: "Reductores de Velocidad",
    emoji: "⚠️",
    desc: "Reductores de velocidad (túmulos) de hule reciclado para control de tráfico vehicular. Modulares, fáciles de instalar y con franjas reflectivas amarillas/negras. Ideales para zonas escolares, residenciales, industriales y estacionamientos.",
    keywords: ["reductor", "velocidad", "túmulo", "tráfico"],
  },
  tapaderas_cisterna: {
    name: "Tapaderas de Cisterna",
    emoji: "💧",
    desc: "Tapaderas para cisterna fabricadas en materiales resistentes y duraderos. Protegen el agua almacenada de contaminación y acceso no autorizado. Disponibles en diferentes tamaños para adaptarse a cisternas estándar.",
    keywords: ["tapadera", "cisterna", "agua", "tanque"],
  },
  tapaderas_pozo: {
    name: "Tapaderas de Pozo",
    emoji: "🕳️",
    desc: "Tapaderas para pozo de inspección, fabricadas para soportar cargas vehiculares y peatonales. Resistentes a la intemperie y con sistema de seguridad. Disponibles en diferentes medidas según el diámetro del pozo.",
    keywords: ["tapadera", "pozo", "inspección", "registro"],
  },
  zocalo: {
    name: "Zócalo",
    emoji: "📐",
    desc: "Zócalos decorativos para terminado de paredes y pisos. Disponibles en varios diseños y materiales. Proporcionan un acabado profesional y protegen la base de las paredes contra golpes y humedad.",
    keywords: ["zócalo", "moldura", "terminado", "pared"],
  },
  molduras: {
    name: "Molduras",
    emoji: "🎨",
    desc: "Molduras decorativas y rosetones para embellecer techos, paredes y marcos. Variedad de estilos clásicos y modernos. Fáciles de instalar, transforman cualquier espacio agregando elegancia y personalidad.",
    keywords: ["moldura", "rosetón", "decoración", "techo"],
  },
  pilas: {
    name: "Pilas",
    emoji: "🚿",
    desc: "Pilas de concreto para lavado, disponibles en diferentes tamaños y diseños. Resistentes, duraderas y funcionales. Ideales para áreas de lavandería residencial y comercial.",
    keywords: ["pila", "lavadero", "concreto", "lavado"],
  },
  grama: {
    name: "Grama Artificial",
    emoji: "🌿",
    desc: "Grama artificial de alta calidad para jardines, terrazas y áreas recreativas. Apariencia natural, no requiere riego ni mantenimiento constante. Resistente a rayos UV y al tráfico peatonal. Disponible en diferentes alturas y densidades.",
    keywords: ["grama", "césped", "artificial", "jardín"],
  },
  muros_verdes: {
    name: "Muros Verdes",
    emoji: "🌱",
    desc: "Muros verdes artificiales (jardines verticales) para decoración de interiores y exteriores. Follaje realista que no requiere riego ni mantenimiento. Perfectos para fachadas, oficinas, restaurantes y espacios comerciales.",
    keywords: ["muro verde", "jardín vertical", "follaje", "decoración"],
  },
  superpulido: {
    name: "Superpulido",
    emoji: "✨",
    desc: "Acabado superpulido para pisos de concreto. Brinda una superficie lisa, brillante y resistente al desgaste. Ideal para interiores residenciales y comerciales que buscan un acabado moderno y fácil de limpiar.",
    keywords: ["superpulido", "piso", "pulido", "acabado"],
  },
  sobrepiso_gris: {
    name: "Sobrepiso Gris",
    emoji: "🔲",
    desc: "Sobrepiso gris para nivelación y preparación de superficies antes de instalar el piso final. Mezcla lista para aplicar, de fácil uso y secado rápido. Proporciona una base uniforme y resistente.",
    keywords: ["sobrepiso", "gris", "nivelación", "base"],
  },
  microcemento: {
    name: "Microcemento",
    emoji: "🏢",
    desc: "Microcemento decorativo para revestimiento de pisos, paredes, baños y cocinas. Acabado continuo sin juntas, moderno y elegante. Resistente a la humedad y al desgaste. Disponible en varios colores y texturas.",
    keywords: ["microcemento", "revestimiento", "moderno", "decorativo"],
  },
  acril_techo: {
    name: "Acril Techo",
    emoji: "🏡",
    desc: "Impermeabilizante acrílico para techos. Protege contra filtraciones y humedad. Fácil aplicación con rodillo o brocha. Flexible, resistente a rayos UV y de larga duración. Ideal para techos de concreto, lámina y fibrocemento.",
    keywords: ["acril", "techo", "impermeabilizante", "acrílico"],
  },
};

const CATEGORIES = {
  construccion: {
    name: "🏗️ Construcción",
    products: ["ladrillo_planchado", "superpulido", "sobrepiso_gris", "microcemento", "acril_techo"],
  },
  decoracion: {
    name: "🎨 Decoración",
    products: ["grama", "muros_verdes", "zocalo", "molduras", "baldosa", "fachaleta"],
  },
  seguridad_vial: {
    name: "🚧 Seguridad Vial",
    products: ["topes_estacionamiento", "reductores_velocidad"],
  },
  calentadores: {
    name: "🔥 Calentadores",
    products: ["calentadores"],
  },
  tejas: {
    name: "🏠 Tejas",
    products: ["tejas"],
  },
  pilas: {
    name: "🚿 Pilas",
    products: ["pilas"],
  },
  tapaderas: {
    name: "💧 Tapaderas",
    products: ["tapaderas_cisterna", "tapaderas_pozo"],
  },
};

const INITIAL_MESSAGES = [
  {
    id: 0,
    from: "bot",
    text: "¡Hola! 👋 Bienvenido a *Rekubre*, tu aliado en materiales de construcción y decoración con más de 19 años de experiencia.\n\n¿En qué te podemos ayudar hoy?",
    time: "9:00 AM",
    options: ["Ver categorías de productos", "Solicitar cotización", "Hablar con un asesor"],
  },
];

function formatText(text) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*[^*]+\*)/g).map((part, j) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return <strong key={j}>{part.slice(1, -1)}</strong>;
      }
      return part;
    });
    return (
      <span key={i}>
        {i > 0 && <br />}
        {parts}
      </span>
    );
  });
}

function getTime() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${m} ${ampm}`;
}

function matchProduct(query) {
  const q = query.toLowerCase();
  for (const [key, prod] of Object.entries(REKUBRE_PRODUCTS)) {
    for (const kw of prod.keywords) {
      if (q.includes(kw)) return { key, ...prod };
    }
  }
  return null;
}

export default function RekubreWhatsApp() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadForm, setLeadForm] = useState(null);
  const [leadData, setLeadData] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [currentView, setCurrentView] = useState("chat");
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addBotMessage = (text, options = null, delay = 800) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), from: "bot", text, time: getTime(), options },
      ]);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text, time: getTime() },
    ]);
  };

  const handleOption = (option) => {
    addUserMessage(option);
    const lower = option.toLowerCase();

    if (lower === "ver categorías de productos" || lower === "ver más categorías" || lower === "volver al menú") {
      const catList = Object.values(CATEGORIES).map((c) => c.name).join("\n");
      addBotMessage(
        `Estas son nuestras categorías:\n\n${catList}\n\nSelecciona una categoría para ver los productos disponibles:`,
        Object.values(CATEGORIES).map((c) => c.name)
      );
    } else if (lower === "solicitar cotización" || lower === "📋 solicitar cotización") {
      setLeadForm("cotizacion");
    } else if (lower === "hablar con un asesor" || lower === "💬 hablar con un asesor") {
      addBotMessage(
        "Con gusto te conectamos con un asesor. 📱\n\nNuestros asesores están disponibles de *lunes a viernes de 8:00 AM a 5:00 PM* y *sábados de 8:00 AM a 12:00 PM*.\n\nPuedes contactarnos directamente:\n📞 2236-8257 / 2221-7585\n📧 rekubre@gmail.com\n\nO déjanos tus datos y te contactamos:",
        ["📋 Solicitar cotización", "🔙 Volver al menú"]
      );
    } else if (lower === "🔙 volver al menú") {
      addBotMessage(
        "¿En qué más te podemos ayudar? 😊",
        ["Ver categorías de productos", "Solicitar cotización", "Hablar con un asesor"]
      );
    } else {
      // Check if it's a category
      const cat = Object.values(CATEGORIES).find((c) => c.name === option);
      if (cat) {
        const prods = cat.products.map((p) => `${REKUBRE_PRODUCTS[p].emoji} ${REKUBRE_PRODUCTS[p].name}`);
        addBotMessage(
          `*${cat.name}*\n\nEstos son los productos disponibles:\n\n${prods.join("\n")}\n\nSelecciona un producto para más detalles:`,
          [...prods, "🔙 Volver al menú"]
        );
      } else {
        // Check if it's a product
        const prodMatch = Object.entries(REKUBRE_PRODUCTS).find(
          ([, p]) => option.includes(p.name)
        );
        if (prodMatch) {
          const [, prod] = prodMatch;
          addBotMessage(
            `*${prod.emoji} ${prod.name}*\n\n${prod.desc}\n\n¿Te gustaría solicitar una cotización o tienes alguna otra pregunta?`,
            ["📋 Solicitar cotización", "Ver más categorías", "💬 Hablar con un asesor"]
          );
        }
      }
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    addUserMessage(text);

    const product = matchProduct(text);
    if (product) {
      addBotMessage(
        `*${product.emoji} ${product.name}*\n\n${product.desc}\n\n¿Te gustaría solicitar una cotización?`,
        ["📋 Solicitar cotización", "Ver más categorías", "💬 Hablar con un asesor"]
      );
    } else if (text.toLowerCase().includes("precio") || text.toLowerCase().includes("costo") || text.toLowerCase().includes("cotiz")) {
      addBotMessage(
        "Para brindarte una cotización personalizada, necesitamos algunos datos. ¿Te gustaría llenar un formulario rápido?",
        ["📋 Solicitar cotización", "💬 Hablar con un asesor"]
      );
    } else if (text.toLowerCase().includes("hola") || text.toLowerCase().includes("buenos") || text.toLowerCase().includes("buenas")) {
      addBotMessage(
        "¡Hola! 😊 Bienvenido a *Rekubre*. ¿En qué te podemos ayudar?",
        ["Ver categorías de productos", "Solicitar cotización", "Hablar con un asesor"]
      );
    } else if (text.toLowerCase().includes("horario") || text.toLowerCase().includes("hora") || text.toLowerCase().includes("abierto")) {
      addBotMessage(
        "🕐 Nuestro horario de atención es:\n\n*Lunes a Viernes:* 8:00 AM - 5:00 PM\n*Sábados:* 8:00 AM - 12:00 PM\n*Domingos:* Cerrado\n\n📍 Col. Los Almendros, Bloque D, Casa #7, Tegucigalpa",
        ["Ver categorías de productos", "📋 Solicitar cotización", "🔙 Volver al menú"]
      );
    } else if (text.toLowerCase().includes("ubicación") || text.toLowerCase().includes("dirección") || text.toLowerCase().includes("donde")) {
      addBotMessage(
        "📍 Nos encontramos en:\n*Col. Los Almendros, Bloque D, Casa #7, Tegucigalpa, Honduras*\n\n📞 2236-8257 / 2221-7585\n📧 rekubre@gmail.com",
        ["Ver categorías de productos", "📋 Solicitar cotización", "🔙 Volver al menú"]
      );
    } else {
      // AI fallback response
      addBotMessage(
        "Gracias por tu mensaje. 🤔 Déjame ayudarte mejor.\n\nPuedo asistirte con información sobre nuestros productos o conectarte con un asesor.\n\n¿Qué prefieres?",
        ["Ver categorías de productos", "Solicitar cotización", "Hablar con un asesor"],
        1200
      );
    }
  };

  const handleLeadSubmit = () => {
    if (!leadData.nombre || !leadData.telefono) return;
    setLeadForm(null);
    addUserMessage(`📋 Solicitud de cotización:\nNombre: ${leadData.nombre}\nTeléfono: ${leadData.telefono}${leadData.email ? `\nEmail: ${leadData.email}` : ""}${leadData.mensaje ? `\nMensaje: ${leadData.mensaje}` : ""}`);
    addBotMessage(
      `¡Gracias *${leadData.nombre}*! 🎉\n\nHemos recibido tu solicitud de cotización. Un asesor de Rekubre se comunicará contigo al *${leadData.telefono}* a la brevedad.\n\n¿Hay algo más en lo que podamos ayudarte?`,
      ["Ver categorías de productos", "🔙 Volver al menú"]
    );
    setLeadData({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

  return (
    <div style={{
      width: "100%",
      maxWidth: 420,
      margin: "0 auto",
      height: "100vh",
      maxHeight: 750,
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      background: "#e5ddd5",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
      position: "relative",
    }}>
      {/* Header */}
      <div style={{
        background: "#075e54",
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexShrink: 0,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: "linear-gradient(135deg, #1a3a5c, #2d6a4f)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, fontWeight: 700, color: "#fff",
          border: "2px solid rgba(255,255,255,0.2)",
        }}>R</div>
        <div style={{ flex: 1 }}>
          <div style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>Rekubre Honduras</div>
          <div style={{ color: "#8edece", fontSize: 12 }}>
            {typing ? "escribiendo..." : "en línea"}
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, color: "#fff", fontSize: 18 }}>
          <span style={{ cursor: "pointer", opacity: 0.8 }}>📞</span>
          <span style={{ cursor: "pointer", opacity: 0.8 }}>⋮</span>
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b89a' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}>
        {/* Date chip */}
        <div style={{
          textAlign: "center", margin: "4px 0 8px",
        }}>
          <span style={{
            background: "#d9f2fa",
            color: "#5f7e8a",
            fontSize: 11,
            padding: "4px 12px",
            borderRadius: 6,
            fontWeight: 500,
          }}>HOY</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "82%",
              padding: "7px 10px 4px",
              borderRadius: msg.from === "user" ? "10px 2px 10px 10px" : "2px 10px 10px 10px",
              background: msg.from === "user" ? "#dcf8c6" : "#fff",
              boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
              position: "relative",
            }}>
              <div style={{ fontSize: 14, color: "#303030", lineHeight: 1.4, wordBreak: "break-word" }}>
                {formatText(msg.text)}
              </div>
              <div style={{
                textAlign: "right", marginTop: 2,
                fontSize: 11, color: "#8a9aa5",
              }}>
                {msg.time} {msg.from === "user" && "✓✓"}
              </div>
            </div>

            {msg.options && (
              <div style={{
                maxWidth: "82%",
                display: "flex",
                flexWrap: "wrap",
                gap: 5,
                marginTop: 6,
                marginBottom: 4,
              }}>
                {msg.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOption(opt)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 18,
                      border: "1px solid #075e54",
                      background: "#fff",
                      color: "#075e54",
                      fontSize: 13,
                      cursor: "pointer",
                      fontWeight: 500,
                      transition: "all 0.15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#075e54";
                      e.target.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "#fff";
                      e.target.style.color = "#075e54";
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div style={{
            maxWidth: "20%",
            padding: "10px 16px",
            borderRadius: "2px 10px 10px 10px",
            background: "#fff",
            boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
          }}>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#90a4ae",
                  animation: `bounce 1.2s ${i * 0.15}s infinite`,
                }} />
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEnd} />
      </div>

      {/* Lead form overlay */}
      {leadForm && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "#fff",
          borderTop: "2px solid #075e54",
          padding: 20,
          zIndex: 10,
          borderRadius: "16px 16px 0 0",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.12)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#075e54" }}>📋 Solicitar Cotización</span>
            <button onClick={() => setLeadForm(null)} style={{
              background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#888",
            }}>✕</button>
          </div>
          {[
            { key: "nombre", label: "Nombre completo *", type: "text", ph: "Tu nombre" },
            { key: "telefono", label: "Teléfono *", type: "tel", ph: "9999-9999" },
            { key: "email", label: "Correo (opcional)", type: "email", ph: "correo@ejemplo.com" },
            { key: "mensaje", label: "¿Qué productos te interesan?", type: "text", ph: "Ej: Necesito cotización de tejas..." },
          ].map((f) => (
            <div key={f.key} style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: "#555", fontWeight: 600, display: "block", marginBottom: 3 }}>{f.label}</label>
              <input
                type={f.type}
                placeholder={f.ph}
                value={leadData[f.key]}
                onChange={(e) => setLeadData({ ...leadData, [f.key]: e.target.value })}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  border: "1.5px solid #ddd",
                  borderRadius: 8,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border 0.2s",
                }}
                onFocus={(e) => e.target.style.borderColor = "#075e54"}
                onBlur={(e) => e.target.style.borderColor = "#ddd"}
              />
            </div>
          ))}
          <button
            onClick={handleLeadSubmit}
            disabled={!leadData.nombre || !leadData.telefono}
            style={{
              width: "100%",
              padding: "11px",
              background: leadData.nombre && leadData.telefono ? "#075e54" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 600,
              cursor: leadData.nombre && leadData.telefono ? "pointer" : "default",
              marginTop: 4,
            }}
          >
            Enviar Solicitud ✉️
          </button>
        </div>
      )}

      {/* Input area */}
      <div style={{
        background: "#f0f0f0",
        padding: "8px 10px",
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 22, cursor: "pointer" }}>😊</span>
        <span style={{ fontSize: 20, cursor: "pointer", transform: "rotate(45deg)" }}>📎</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe un mensaje..."
          style={{
            flex: 1,
            padding: "9px 14px",
            borderRadius: 20,
            border: "none",
            fontSize: 14,
            outline: "none",
            background: "#fff",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            width: 38, height: 38,
            borderRadius: "50%",
            background: "#075e54",
            border: "none",
            color: "#fff",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ➤
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 4px; }
      `}</style>
    </div>
  );
}
