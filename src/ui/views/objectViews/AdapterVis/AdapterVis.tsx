import React from 'react';
import { ReplayAdapter } from '../../../../replay';
import { JsonValueObject } from '../../../components/JsonValue/JsonValue';

export default function AdapterVis({ data }: { data: ReplayAdapter }) {
    return (
        <div className="wgdb-vis">
            <JsonValueObject data={data} />
        </div>
    );
}
