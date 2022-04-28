import TableBase from '@/components/Table';
import type { IColumn } from '@/utils/interfaces';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Divider, Popconfirm, Tooltip } from 'antd';
import { useModel } from 'umi';
import Form from './components/Form';

const HinhThucDaoTao = () => {
  const {
    setVisibleForm,
    setRecord,
    setEdit,
    page,
    limit,
    condition,
    delHinhThucDaoTaoModel,
    loading,
    getHinhThucDaoTaoPageableModel,
  } = useModel('hinhthucdaotao');

  const onCell = (recordHinhThucDaoTao: HinhThucDaoTao.Record) => ({
    onClick: () => {
      setVisibleForm(true);
      setRecord(recordHinhThucDaoTao);
    },
    style: { cursor: 'pointer' },
  });

  const columns: IColumn<HinhThucDaoTao.Record>[] = [
    {
      title: 'STT',
      dataIndex: 'index',
      align: 'center',
      width: 80,
      onCell,
    },
    {
      title: 'Tên',
      dataIndex: 'ten',
      align: 'center',
      width: 80,
      onCell,
    },
    {
      title: 'Mã',
      dataIndex: 'ma',
      align: 'center',
      width: 80,
      onCell,
    },
    {
      title: 'Ký hiệu',
      dataIndex: 'kyHieu',
      align: 'center',
      width: 80,
      onCell,
    },

    {
      title: 'Thao tác',
      align: 'center',
      width: 100,
      fixed: 'right',
      render: (record: HinhThucDaoTao.Record) => {
        return (
          <>
            <Tooltip title="Chỉnh sửa">
              <Button
                onClick={() => {
                  setVisibleForm(true);
                  setEdit(true);
                  setRecord(record);
                }}
                type="default"
                shape="circle"
              >
                <EditOutlined />
              </Button>
            </Tooltip>
            <Divider type="vertical" />

            <Tooltip title="Xóa">
              <Popconfirm
                title="Bạn có chắc chắn muốn xoá?"
                onConfirm={() => delHinhThucDaoTaoModel({ id: record?._id })}
              >
                <Button type="primary" shape="circle">
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Tooltip>
          </>
        );
      },
    },
  ];
  return (
    <>
      <TableBase
        title="Quản lý hình thức đào tạo"
        columns={columns}
        getData={getHinhThucDaoTaoPageableModel}
        dependencies={[page, limit, condition]}
        modelName="hinhthucdaotao"
        loading={loading}
        hascreate
        Form={Form}
      />
    </>
  );
};
export default HinhThucDaoTao;
