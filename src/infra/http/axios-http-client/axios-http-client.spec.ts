import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: { email: 'teste@teste.com' }
})

describe('AxiosHttpClient', () => {
  test('should call axios with correct url and verb', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })

  // test('should call axios with correct body', async () => {

  //   const sut = makeSut()
  //   await sut.post({ url: faker.internet.url() })

  //   expect(mockedAxios.post).toHaveBeenCalledWith(url)
  // })
})
