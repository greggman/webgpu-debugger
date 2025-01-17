import React from 'react';
import { classNames } from '../../lib/css';
import './Column.css';

interface Props {
    expand?: boolean;
    className?: string;
}

export default function Column({ children, className, expand }: React.PropsWithChildren<Props>) {
    return (
        <div className={classNames('spector2-column', { 'spector2-column-expand': !!expand }, className)}>
            {children}
        </div>
    );
}
