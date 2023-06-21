import axios from 'axios';
import { Button, Card, FileInput } from 'flowbite-react';
import moment from 'moment';
import { useState } from 'react';
import { useAuthHeader, useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Layouts } from '../../../component/molecules/Layouts';
import { API_URL } from '../../../utils/constant';
import { Input, TextArea } from './FormInput';

export const ArticleInput = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadProgress] = useState(0);
  const token = useAuthHeader();
  const logout = useSignOut();
  const navigate = useNavigate();
  const [error, setError] = useState({
    judul: '',
    subJudul: '',
    gambar: '',
    deskripsi: '',
  });
  const [dataForm, setDataForm] = useState({
    judul: '',
    subJudul: '',
    gambar: null,
    deskripsi: '',
  });

  const hadleChangeImage = (e) => {
    const file = e.target.files[0];
    setDataForm({ ...dataForm, gambar: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dataForm.judul == '') {
      setError({ ...error, judul: 'Tidak boleh kosong' });
      return;
    }
    if (dataForm.subJudul == '') {
      setError({ ...error, subJudul: 'Tidak boleh kosong' });
      return;
    }
    if (dataForm.deskripsi == '') {
      setError({ ...error, deskripsi: 'Tidak boleh kosong' });
      return;
    }
    if (dataForm.gambar == null) {
      setError({ ...error, gambar: 'Tidak boleh kosong' });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('judul', dataForm.judul);
      formData.append('sub_judul', dataForm.subJudul);
      formData.append('deskripsi', dataForm.deskripsi);
      formData.append('gambar', dataForm.gambar);
      formData.append(
        'tanggal_upload',
        moment(new Date()).format('YYYY-MM-DD')
      );
      const response = await axios.post(
        `${API_URL}/artikel/addArtikel`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token()}`,
          },
        }
      );
      console.log(response);
      toast.success('Berhasil Menyimpan Artikel');
      navigate('/admin/artikel/list');
    } catch (error) {
      console.log(error);
      if (error.response.status == 401) {
        logout();
        navigate('/login');
      }
      if (error.response.status == 422) {
        toast.error('Terdapat kesalahan pada input data');
      }
    }
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layouts title={'Input Artikel'}>
      <Sidebar>
        <Container>
          <Card className="max-w-full hover:bg-white" href="#">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                data={dataForm.judul}
                handleChange={handleChange}
                name="judul"
                label={'Judul'}
                error={error.judul}
              />
              <Input
                data={dataForm.subJudul}
                handleChange={handleChange}
                name="subJudul"
                label={'Sub Judul'}
                error={error.subJudul}
              />
              <div>
                <FileInput
                  helperText={
                    error.gambar
                      ? error.gambar
                      : 'Ukuran file tidak lebih dari 1 mb'
                  }
                  id="gambar"
                  name="gambar"
                  onChange={hadleChangeImage}
                  color={error.gambar && 'failure'}
                />
              </div>
              <TextArea
                data={dataForm.deskripsi}
                error={error.deskripsi}
                handleChange={handleChange}
                label="Deksripsi"
                name={'deskripsi'}
              />
              <div className="flex justify-between">
                <Button type="submit" color="warning">
                  Simpan
                </Button>
                <Button outline color="warning">
                  Kembali
                </Button>
              </div>
            </form>
          </Card>
        </Container>
      </Sidebar>
    </Layouts>
  );
};
