import { Button, Card, FileInput, Label, TextInput } from 'flowbite-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '../../../component/atom/Container/Container';
import { Sidebar } from '../../../component/molecules/Admin/Sidebar';
import { Layouts } from '../../../component/molecules/Layouts';
import { Input, TextArea } from '../ArticleInput/FormInput';
import { useFormik } from 'formik';
import axios from 'axios';
import { API_URL } from '../../../utils/constant';
import { getTokenInvesta } from '../../../utils/function';
import { useAuthHeader } from 'react-auth-kit';
import { toast } from 'react-toastify';

function ArticleEdit() {
  const params = useParams();
  const token = useAuthHeader();
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Simpan hasil pembacaan file ke dalam Formik values
      formik.setFieldValue('gambar', file);
    };

    reader.readAsDataURL(file); // Membaca file sebagai URL data
    // setFile(URL.createObjectURL(event.target.files[0]));
  };
  const formik = useFormik({
    initialValues: {
      judul: '',
      sub_judul: '',
      deskripsi: '',
      tanggal_upload: '',
      gambar: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          API_URL + `/artikel/updateArtikel/${params.id}`,
          values,
          getTokenInvesta(token())
        );
        // await axios.post(
        //   API_URL + `/artikel/updateGambarArtikel/${params.id}`,
        //   {
        //     gambar: values.gambar,
        //   },
        //   getTokenInvesta(token())
        // );
        navigate('/admin/artikel');
        toast.success('Berhasil update artikel');
      } catch (error) {
        toast.error('Gagal update artikel');
      }
    },
  });

  return (
    <Layouts title={'Input Artikel'}>
      <Sidebar>
        <Container>
          <Card className="max-w-full hover:bg-white" href="#">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
            >
              <Input
                error={''}
                handleChange={formik.handleChange}
                name="judul"
                label={'Judul'}
              />
              <Input
                error={''}
                handleChange={formik.handleChange}
                name="sub_judul"
                label={'Sub Judul'}
              />
              <Label value="Tangal Upload" />
              <TextInput
                error={''}
                onChange={formik.handleChange}
                name="tanggal_upload"
                label={'Tanggal Upload'}
                type="date"
              />
              {/* <FileInput name="gambar" onChange={handleFileChange} /> */}
              <TextArea
                error={''}
                label="deskripsi"
                handleChange={formik.handleChange}
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
}

export default ArticleEdit;
