import { API_URL } from "../../../utils/constant";

export const accPengajuan = async (
  { id, imbal_hasil, status_pengajuan, resiko, deskripsi, jumlah_unit },
  token
) => {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    var formdata = new FormData();
    formdata.append("imbal_hasil", parseInt(imbal_hasil));
    formdata.append("status", status_pengajuan);
    formdata.append("resiko", resiko);
    formdata.append("deskripsi", deskripsi);
    formdata.append("jumlah_unit", jumlah_unit);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${API_URL}/pengajuan/acceptPengajuan/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getDetailPengajuan = (id, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      const resultAPI = await fetch(
        API_URL + "/pengajuan/detailPengajuan/" + id,
        requestOptions
      );
      const resultData = await resultAPI.json();
      console.log(resultData);
      if (resultData.error) {
        reject(resultData.error);
      }
      resolve(resultData.Pengajuan);
    } catch (error) {
      reject(error);
    }
  });
};
