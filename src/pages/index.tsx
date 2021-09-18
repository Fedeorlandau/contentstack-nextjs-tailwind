import { GetServerSideProps } from 'next'

import Page, { PageProps } from '../components/Page/Page'
import { getPageBySlug } from '../libs/contentstack'

export default Page

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const page = await getPageBySlug('/')

  return {
    props: {
      page,
    },
  }
}
