import DialogModal from '@Common/Dialog/Dialog';
import Button from '../Button/Button';
import React from 'react';
import { LogoutDialogProps } from '@Types/Common';
import useTranslation from '@Hooks/useTranslation';
import { useQueryClient } from '@tanstack/react-query';
import UserLogOut from '@Services/User/UserLogOut';
import useRequest from '@Hooks/useRequest';
const LogoutDialog: React.FC<LogoutDialogProps & PropsWithChildren> = ({ closeModal, isOpen }) => {
  const translation = useTranslation();
  const { Request } = useRequest();
  const queryClient = useQueryClient();
  const { mutateAsync } = Request({
    mutationFn: UserLogOut,
    onSuccess: async () => {
      await queryClient.resetQueries({ queryKey: ['get-user'] });
    },
  });

  return (
    <DialogModal
      isOpen={isOpen}
      title={translation.logout}
      closeModal={closeModal}>
      <div className='flex flex-col items-center justify-between gap-5'>
        <p className='text-base text-gray-500'>{translation.confirm_logout_question}</p>

        <div className='w-full flex items-center justify-between'>
          <Button
            onClick={closeModal}
            className='bg-transparent border border-primary text-primary text-xs'>
            {translation.cancel_logout}
          </Button>
          <Button
            onClick={async () => await mutateAsync()}
            className='bg-primary border border-primary text-white text-xs'>
            {translation.confirm_logout}
          </Button>
        </div>
      </div>
    </DialogModal>
  );
};

export default LogoutDialog;
