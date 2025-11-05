'use client';

interface ButtonComponentProps {
  label: string;
  color: string;
  onClick: () => void;
}

function ButtonComponent({ label, color, onClick }: ButtonComponentProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        margin: '10px',
        fontSize: '16px',
        backgroundColor: color,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
}

export default function Buttons() {
  const handleClick = (buttonName: string) => {
    alert(`${buttonName} clicked!`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Buttons</h2>
      <div>
        <ButtonComponent
          label="Button 1"
          color="#3b82f6"
          onClick={() => handleClick('Button 1')}
        />
        <ButtonComponent
          label="Button 2"
          color="#10b981"
          onClick={() => handleClick('Button 2')}
        />
        <ButtonComponent
          label="Button 3"
          color="#f59e0b"
          onClick={() => handleClick('Button 3')}
        />
      </div>
    </div>
  );
}
