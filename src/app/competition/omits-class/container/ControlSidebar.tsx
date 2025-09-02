import Typography from '@/components/Typography';
import { subjects } from '@/contents/OmitsClass';
import type { Subject } from '@/contents/OmitsClass';
import { cn } from '@/lib/utils';
import React from 'react';

type ControlSidebarProps = {
  activeSubject: Subject;
  setActiveSubject: (subject: Subject) => void;
};

const ControlSidebar = React.memo(
  ({ activeSubject, setActiveSubject }: ControlSidebarProps) => {
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
                  'flex cursor-pointer items-center rounded-lg border-2 p-3 transition-all',
                  {
                    'border-transparent bg-gradient-to-r from-[#658E78] to-[#D4DFE6]':
                      isActive,
                    'border-transparent bg-gray-100 hover:bg-gray-200':
                      !isActive,
                  },
                )}
              >
                <div className="mr-4 h-12 w-12 flex-shrink-0 rounded-md bg-gray-300"></div>
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
        </div>
      </div>
    );
  },
);

ControlSidebar.displayName = 'ControlSidebar';

export default ControlSidebar;
