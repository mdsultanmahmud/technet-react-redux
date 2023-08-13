import { FormEvent, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useAddReviewMutation, useGetCommentQuery } from '@/redux/feature/products/productApi';

interface IProps {
  id: string
}
export default function ProductReview({ id }: IProps) {
  const [postReview, { isLoading, isError, isSuccess}] = useAddReviewMutation()
  const { data } = useGetCommentQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 60000
  })
  console.log(isLoading, isError, isSuccess);
  const [review, setReview] = useState<string>('')


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const options = {
      id: id,
      data: { comment: review }
    }
    postReview(options)
  }
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <form className='w-full' onSubmit={handleSubmit}>
          <div className='flex items-end gap-x-4'>
            <Textarea
              className="min-h-[100px] border border-2 border-red-500 w-full md:w-1/2"
              placeholder='Wrtie your review...'
              onChange={e => setReview(e.target.value)}
              value={review}
            />
            <Button className="rounded-full h-10 w-10 p-2 text-[25px]">
              <FiSend />
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
