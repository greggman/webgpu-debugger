import React from 'react';
import { classNames } from '../../lib/css';
import './ColumnHolder.css';

interface Props {
    className?: string;
}

export default function ColumnHolder({ className, children }: React.PropsWithChildren<Props>) {
    return <div className={classNames('spector2-column-holder', className)}>{children}</div>;
}
