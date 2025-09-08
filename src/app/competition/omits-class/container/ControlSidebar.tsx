import Typography from '@/components/Typography';
import { subjects } from '@/contents/OmitsClass';
import type { Subject } from '@/contents/OmitsClass';
import { cn } from '@/lib/utils';
import { ExternalLink, File, NotebookPen, Video } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type ControlSidebarProps = {
  activeSubject: Subject;
  setActiveSubject: (subject: Subject) => void;
  fileLink: string;
};

const ControlSidebar = React.memo(
  ({ activeSubject, setActiveSubject, fileLink }: ControlSidebarProps) => {
    return (
      <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-white shadow-xl backdrop-blur-sm">
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {subjects.map((subject) => {
            const isActive = activeSubject.id === subject.id;
            return (
              <div
                key={subject.id}
                onClick={() => setActiveSubject(subject)}
                className={cn(
                  'flex cursor-pointer items-center space-x-3 rounded-lg border-2 p-3 transition-all',
                  {
                    'border-transparent bg-gradient-to-r from-[#658E78] to-[#D4DFE6]':
                      isActive,
                    'border-transparent bg-gray-100 hover:bg-gray-200':
                      !isActive,
                  },
                )}
              >
                {subject.id === 1 ? (
                  <NotebookPen
                    size={32}
                    className={cn(isActive ? 'text-white' : 'text-[#658E78]')}
                  />
                ) : (
                  <Video
                    size={32}
                    className={cn(isActive ? 'text-white' : 'text-[#658E78]')}
                  />
                )}
                <div>
                  <Typography
                    variant="p"
                    font="Lora"
                    weight="bold"
                    className="bg-gradient-to-b from-[#191717] to-[#7F7575] bg-clip-text text-transparent max-md:text-[14px]"
                  >
                    {subject.name}
                  </Typography>
                </div>
              </div>
            );
          })}

          <Link href={fileLink} target="_blank">
            <div
              className={cn(
                'flex cursor-pointer items-center justify-between space-x-3 rounded-lg border-2 p-3 transition-all',
                'border-transparent bg-gradient-to-r from-[#658E78] to-[#D4DFE6]',
                'border-transparent bg-gray-100 hover:bg-gray-200',
              )}
            >
              <div className="flex items-center space-x-3">
                <File size={32} className={cn('text-[#658E78]')} />

                <div>
                  <Typography
                    variant="p"
                    font="Lora"
                    weight="bold"
                    className="bg-gradient-to-b from-[#191717] to-[#7F7575] bg-clip-text text-transparent max-md:text-[14px]"
                  >
                    Soal Try Out dan Pembahasan
                  </Typography>
                </div>
              </div>

              <ExternalLink size={26} className={cn('text-[#658E78]')} />
            </div>
          </Link>
        </div>
      </div>
    );
  },
);

ControlSidebar.displayName = 'ControlSidebar';

export default ControlSidebar;
