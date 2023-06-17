import React from 'react';
import { Card, Table, Tag } from 'antd';
import './style.css';

export default function App() {
  const dataSource = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      cardType: 'Visa',
      totalSpent: 2500,
      tags: ['Viagem', 'Restaurantes'],
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      cardType: 'Mastercard',
      totalSpent: 1800,
      tags: ['Compras Online', 'Lazer'],
    },
    {
      key: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      cardType: 'American Express',
      totalSpent: 3200,
      tags: ['Supermercado', 'Saúde'],
    },
    {
      key: '4',
      name: 'Michael Brown',
      email: 'michael@example.com',
      cardType: 'Visa',
      totalSpent: 1500,
      tags: ['Viagem', 'Entretenimento'],
    },
    {
      key: '5',
      name: 'Emily Davis',
      email: 'emily@example.com',
      cardType: 'Mastercard',
      totalSpent: 2700,
      tags: ['Restaurantes', 'Moda'],
    },
    {
      key: '6',
      name: 'David Wilson',
      email: 'david@example.com',
      cardType: 'Visa',
      totalSpent: 900,
      tags: ['Lazer', 'Eletrônicos'],
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <div className="cell-info">
          <p className="cell-title">{text}</p>
          <p>name</p>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'email',
      key: 'email',
      render: (text) => (
        <div className="cell-info">
          <p>{text}</p>
          <p>email</p>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'cardType',
      key: 'cardType',
      render: (text) => (
        <div className="cell-info">
          <p>
            <Tag color="blue">{text}</Tag>
          </p>
          <p>card type</p>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'totalSpent',
      key: 'totalSpent',
      render: (text) => (
        <div className="cell-info">
          <p>R$ {text}</p>
          <p>total spent</p>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <div className="cell-info">
          {tags.map((tag) => (
            <p>
              <Tag color="green" key={tag}>
                {tag}
              </Tag>
            </p>
          ))}
          <p className="cell-description">tags</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h1>Antd Responsive Table</h1>
      <p>Ideia or workaround? :)</p>
      <Card>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          className="ant-responsive-table"
        />
      </Card>
    </div>
  );
}
