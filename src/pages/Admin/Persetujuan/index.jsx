import React from 'react'
import { Layouts } from '../../../component/molecules/Layouts'
import { Sidebar } from '../../../component/molecules/Admin/Sidebar'
import { Container } from '../../../component/atom/Container/Container'
import { CardProyek } from '../../../component/molecules/Admin/CardProyek'

export const Persetujuan = () => {
  return (
    <Layouts title="Admin Dashboard">
      <Sidebar>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start relative">
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
            <CardProyek danaTerkumpul="Rp. 0" status="Sedang Diperiksa" kebutuhanDana="Rp. 20.000.000" image="https://placehold.co/600x400" title="Pertanian Tomat" />
          </div>
        </Container>
      </Sidebar>
    </Layouts>
  )
}
